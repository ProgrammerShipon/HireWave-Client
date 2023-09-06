import { useQuery } from "@tanstack/react-query";

const useChat = () => {
  const userId = "64ea1e92f5c8ebb47d388cb7";
  const { data: chatHistory = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['chatHistory'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3030/api/chat/${userId}`);
      const data = await res.json();
      return data;
    },
  });

  return [chatHistory, loading, refetch];
};


export default useChat;
