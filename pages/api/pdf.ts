import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

const saveAsPdf = async (url: string, resumeId: string) => {
  if (resumeId != "") {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(url, { waitUntil: "load" });
      await page.emulateMediaType("screen");
      const result = await page.pdf({
        format: "a4",
      });
      await browser.close();
      return result;
    } catch (error) {
      console.log("error generating pdf", error);
      return error;
    }
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url, resumeId } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }
  if (!resumeId) {
    return res
      .status(400)
      .json({ error: "Resume Details parameter is required" });
  }

  const pdf = await saveAsPdf(url as string, resumeId as string);

  res.setHeader(
    "Content-Disposition",
    `attachment; filename="generated-pdf.pdf"`
  );
  res.setHeader("Content-Type", "application/pdf");
  return res.send(pdf);
};
