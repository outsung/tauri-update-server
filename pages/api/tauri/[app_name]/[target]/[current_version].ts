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
      url: "https://github.com/outsung/tauri-update-server/raw/main/updates/tauri/0.0.2/tauri-boilerplate.app.tar.gz",
      version: "0.0.2",
      notes: "v0.0.2 test file",
      pub_date: "2020-09-18T12:29:53+01:00",
      signature:
        "dW50cnVzdGVkIGNvbW1lbnQ6IG1pbmlzaWduIHB1YmxpYyBrZXk6IEExODNDOTg1QUU0NDIyMEQKUldRTklrU3VoY21Eb2ZqeHdWS29RWWlvOGw2b0Zid2FnenJ2aDkwU1hkdXU1ZjdoUWZ6UnIzRVYK",
    });
  } else {
    res.statusCode = 204;
    res.json({});
    return;
  }
}
