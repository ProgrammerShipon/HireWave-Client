import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useChat = () => {
  const { currentUser } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // console.log(currentUser._id)
  const {
    data: chats = [], isLoading: chatLoading, refetch: chatRefetch, } = useQuery({
      queryKey: ["chats"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/chat/${currentUser._id}`);
        return res.data;
      },
    });

  return [chats, chatLoading, chatRefetch];
};


export default useChat;
