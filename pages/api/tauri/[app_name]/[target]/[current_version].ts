import { NextApiRequest, NextApiResponse } from "next";

export default function assetsEndpoint(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const appName = req.query.app_name;
  const target = req.query.target;
  const currentVersion = req.query.current_version;

  // const url = `http://localhost:3000/api/${appName}`;
  console.log({ appName, target, currentVersion });

  res.statusCode = 204;
  res.json({});
  // res.json({
  //   url: "https://mycompany.example.com/myapp/releases/myrelease.tar.gz",
  //   version: "0.0.1",
  //   signature: "",
  // });
  return;
}
