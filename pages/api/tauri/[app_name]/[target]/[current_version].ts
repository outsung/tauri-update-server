import { NextApiRequest, NextApiResponse } from "next";

export default function assetsEndpoint(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const appName = req.query.app_name;
  const target = req.query.target;
  const currentVersion = req.query.current_version;

  console.log({ appName, target, currentVersion });

  if (currentVersion === "0.0.1") {
    res.statusCode = 200;
    res.json({
      version: "0.0.2",
      notes: "v0.0.2 test file",
      platforms: {
        "darwin-x86_64": {
          signature: process.env.TAURI_PRIVATE_KEY,
          url: "https://github.com/outsung/tauri-update-server/raw/main/updates/tauri/0.0.2/tauri-boilerplate.app.tar.gz",
        },
        "darwin-aarch64": {
          signature: process.env.TAURI_PRIVATE_KEY,
          url: "https://github.com/outsung/tauri-update-server/raw/main/updates/tauri/0.0.2/tauri-boilerplate.app.tar.gz",
        },
      },
    });
  } else {
    res.statusCode = 204;
    res.json({});
    return;
  }
}
