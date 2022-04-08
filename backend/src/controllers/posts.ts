import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

const dataEndpoint = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = async (req: Request, res: Response) => {
  try {
    const result: AxiosResponse = await axios.get(dataEndpoint);
    const posts: [Post] = result.data;
    return res.status(200).json(posts);
  } catch {
    return res.status(500).json({ message: 'Failed to retrieve posts.' });
  }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const result: AxiosResponse = await axios.get(`${dataEndpoint}/${id}`);
    const post: Post = result.data;
    return res.status(200).json(post);
  } catch {
    return res.status(500).json({ message: 'Failed to retrieve post.' });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const title: string = req.body.title || null;
    const body: string = req.body.body || null;
    const response: AxiosResponse = await axios.put(`${dataEndpoint}/${id}`, {
      ...(title && { title }),
      ...(body && { body }),
    });
    return res.status(200).json(response.data);
  } catch {
    return res.status(500).json({ message: 'Failed to create post.' });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    await axios.delete(`${dataEndpoint}/${id}`);
    return res.status(200).json({
      message: 'post deleted successfully',
    });
  } catch {
    return res.status(500).json({ message: 'Failed to delete post.' });
  }
};

const addPost = async (req: Request, res: Response) => {
  try {
    const title: string = req.body.title;
    const body: string = req.body.body;
    const userId: string = req.body.userId;
    const response: AxiosResponse = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        title,
        body,
        userId,
      }
    );
    return res.status(200).json(response.data);
  } catch {
    return res.status(500).json({ message: 'Failed to create post.' });
  }
};

export default { getPosts, getPost, updatePost, deletePost, addPost };
