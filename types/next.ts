import { NextApiRequest } from "next";

export interface ExtendedNextApiRequest extends NextApiRequest {
  file?: MulterFile;
}

export interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
  path?: string;
  filename?: string;
}
