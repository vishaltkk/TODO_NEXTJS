import S3 from 'aws-sdk/clients/s3';
import { NextApiRequest, NextApiResponse } from 'next';

const s3 = new S3({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: 'v4',
});

export default async function UploadPdf(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, type } = req.body;

    const fileParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: name,
      Expires: 200,
      ContentType: type,
    };

    // eslint-disable-next-line no-console
    console.log('The file paramsa are :', fileParams);

    const url = await s3.getSignedUrlPromise('putObject', fileParams);

    return res.status(200).json({ url });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return res.status(400).json({ message: err });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb', // Set desired value here
    },
  },
};

// import S3 from 'aws-sdk/clients/s3';
// import { NextApiRequest, NextApiResponse } from 'next';

// const s3 = new S3({
//   region: process.env.REGION,
//   accessKeyId: process.env.ACCESS_KEY,
//   secretAccessKey: process.env.SECRET_KEY,
//   signatureVersion: 'v4',
// });

// export default async function uploadFile(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const { name, type } = req.body;

//     const fileParams = {
//       Bucket: process.env.BUCKET_NAME,
//       Key: name,
//       Expires: 1000,
//       ContentType: type,
//     };

//     console.log(fileParams);

//     const url = await s3.getSignedUrlPromise('putObject', fileParams);

//     console.log(url);

//     return res.status(200).json({ url });
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.log(err);
//     return res.status(400).json({ message: err });
//   }
// }

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '5mb', // Set desired value here
//     },
//   },
// };
