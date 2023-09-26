import Container from "@/components/dashboard/Container";
import Frokesy from "@/components/templates/Frokesy";
import { useRouter } from "next/router";
import React from "react";

const Template = () => {
  const router = useRouter();
  const resumeId = router.query.slug;

  return (
    <Container>
      <div className="mt-10 flex justify-between mx-auto">
        <div>
          <span>{resumeId}&apos;s template editor</span>
        </div>
        <div className="text-[#000]">
          <Frokesy />
        </div>
      </div>
    </Container>
  );
};

export default Template;
