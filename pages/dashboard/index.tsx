import Container from "@/components/dashboard/Container";
import Resumes from "@/components/dashboard/Resumes";
import { getUser } from "@/utils/userService";
import { useRouter } from "next/router";
import React, { SetStateAction, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Dashboard = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<SetStateAction<any>>();

  useEffect(() => {
    getUser(setProfile, router);
  }, [router]);

  return (
    <div>
      <Container>
        {profile && (
          <div className="px-10 pt-[10vh]">
            <h1 className="font-mono text-[24px] font-semibold">
              <TypeAnimation
                sequence={[
                  `Hello, ${profile?.name}!`,
                  1000,
                  "Welcome to your dashboard!",
                  1000,
                ]}
                wrapper="h1"
                speed={50}
                repeat={0}
                cursor={false}
              />
            </h1>

            <Resumes />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
