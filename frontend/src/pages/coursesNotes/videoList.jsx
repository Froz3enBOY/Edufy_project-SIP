import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Alert,
  Avatar,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useGetOnePlaylistQuery } from "@/services/courseServiceApi";

export function VideoList() {
  const {playlistId }=  useParams();
  const [videos, setVideos] = useState([]);
    const Response = useGetOnePlaylistQuery(playlistId);
    const res = Response.data;
    useEffect(() => {
        if (res) {
            setVideos(res.all_videos);
        }
    }, [res]);

  

  return (
    <div className="mx-auto my-20">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Video List
          </Typography>
        </CardHeader>
        <div className="px-4 pb-4">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            All Videos
          </Typography>
          <Typography
            variant="small"
            className="font-normal text-blue-gray-500"
          >
            Playlist: {playlistId}
          </Typography>
          <div className="mt-6 grid grid-cols-2 gap-12 md:grid-cols-3 xl:grid-cols-4">
            {videos?.map(({ id, title, description, course }) => (
              <Card
                key={id}
                shadow={false}
                className="relative grid h-[25rem] w-full max-w-[22rem] items-end justify-center overflow-hidden text-center md:w-[100%] lg:w-[100%] p-4"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                  >
                    {title}
                  </Typography>
                  <Typography variant="h5" className="mb-4 text-gray-400">
                    {description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
