import Frokesy from "@/components/templates/Frokesy";
import { supabase } from "@/utils/supabaseClient";
import React, { useEffect, useState } from "react";

const Preview = () => {
  const [resumeDetails, setResumeDetails] = useState({
    resume_id: "",
    personalDetails: {},
    education: [],
    contactInfo: [],
    skills: [],
    experience: [],
  });
  const [resumeId, setResumeId] = useState("");

  const handleDownloadPdf = async (url: string) => {
    try {
      const response = await fetch(`/api/pdf?url=${encodeURIComponent(url)}&resumeId=${resumeDetails.resume_id}`);
      const pdfBlob = await response.blob();

      const a = document.createElement("a");
      a.href = URL.createObjectURL(pdfBlob);
      a.download = "generated-pdf.pdf";
      a.click();
    } catch (error) {
      console.log(error);
    }
  };

  const getResumeDetails = async () => {
    try {
      const { data, error } = await supabase
        .from("templates")
        .select("*")
        .eq("resume_id", resumeId);
      if (error) throw error;
      console.log("data res", data);
      setResumeDetails(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const id = window.localStorage.getItem("resumeId");
    id && setResumeId(id);
  }, []);

  useEffect(() => {
    getResumeDetails();
  }, []);

  if (!resumeDetails) {
    setTimeout(() => getResumeDetails(), 1);
  }

  console.log(resumeDetails?.resume_id);

  return (
    <div>
      {resumeDetails?.education.length > 0 && (
        <div>
          <button
            onClick={() =>
              handleDownloadPdf("http://localhost:3000/resume/preview")
            }
            className="text-[#000]"
          >
            download
          </button>
          <Frokesy value={resumeDetails} />
        </div>
      )}
    </div>
  );
};

export default Preview;
