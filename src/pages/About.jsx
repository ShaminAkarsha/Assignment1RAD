import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Avatar from "@mui/material/Avatar";

export default function About() {
  return (
    <div className="min-h-scree">
      <Grid container spacing={6} margin={5}>
        <Grid borderRight={2} borderColor="gray" xs={12} md={4}>
          <img src="badge.png" className="h-52 w-fit mx-auto" />
        </Grid>
        <Grid xs={12} md={8}>
          <p className="text-gray-500 text-lg text-justify dark:text-gray-200">
            "Pocket Money" addresses the limited earning opportunities for
            students in Sri Lanka by offering a user-friendly platform where
            tasks with monetary rewards can be listed. Students and young adults
            can browse and apply for tasks that match their skills and
            availability, allowing them to earn money without compromising their
            studies. Features like user reviews and ratings ensure transparency
            and trust. Overall, "Pocket Money" empowers young adults to achieve
            financial independence and fosters responsibility and self-reliance.
          </p>
        </Grid>
        <Grid xs={12}>
          <h1 className="text-3xl font-bold text-lime-900 text-center">
            Background & Motivation
          </h1>
          <p className="text-justify text-gray-500 p-8 dark:text-gray-200">
            As we all know, the transition to adulthood is increasingly complex,
            with young adults striving for financial independence (in Sri Lanka
            a 23 year old unfortunately,is still financially supported by their
            parents) & the limited job market makes finding part-time work
            challenging for students and young adults. In Sri Lanka, where the
            job market may be limited for students and young adults, finding
            suitable part-time employment can be particularly challenging. This
            gap in the market inspired the development of "Pocket Money,"
          </p>
        </Grid>
        <Grid xs={12}>
          <h1 className="text-2xl font-bold text-lime-700 mx-auto border-t-4 border-b-4 w-fit">
            Our Team
          </h1>
          <Grid container spacing={6} margin={5}  justifyContent="center" alignItems="center">
            <Grid xs={6} md={3}>
              <Avatar
                alt="Akarsha Shamin"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid xs={6} md={3}>
              <Avatar
                alt="Amrah Nasrul"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid xs={6} md={3}>
              <Avatar
                alt="Minha Quadir"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid xs={6} md={3}>
              <Avatar
                alt="Pasindu Nipun"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
