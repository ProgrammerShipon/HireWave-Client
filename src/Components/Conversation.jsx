import React from "react";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Conversation = ({ chat, setCurrentChat,activeStatus, currentUserId }) => {

  console.log("chat from ", activeStatus)

  const receiverUserId = chat?.members?.find((id) => id !== currentUserId);
  // console.log(receiverUserId)


  const { data: receiverUser = [], isLoading: receiverUserLoading, refetch: refetchReceiverData } = useQuery({
    queryKey: ['receiverUser'],
    queryFn: async () => {
      // const res = await useAxios.get(`/users/Id/64ea2151fb969b46f42b40e0`);
      const res = await useAxios.get(`/users/Id/${receiverUserId}`);
      return res.data;
    },
  });
  // console.log(receiverUser)

  if (receiverUserLoading) {
    return <div>Loading ...</div>
  }

  const handleChat = () => {
    setCurrentChat(chat);
    refetchReceiverData()
  }

  return (
    <div onClick={handleChat} className="flex items-center gap-2 cursor-pointer bg-gray/30 rounded px-4 py-2 ">
      <img
        src="https://i.ibb.co/mvCHJrH/p3.jpg"
        className="w-14 h-14 rounded-full"
        alt=""
      />
      <h3 className="text-2xl">{receiverUser?.name}</h3>
    </div>
  );
};

export default Conversation;
