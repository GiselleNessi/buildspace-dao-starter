import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xf2479Ad4eA9bD4b8ddF094c6336aCf425d04dA76",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Latinx Key",
        description: "This NFT will give you access to LatinxDAO!",
        image: readFileSync("scripts/assets/nasa-ScBkW9AKgcA-unsplash.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()