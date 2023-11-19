import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Using tanstack query
  // const {} = useQuery({
  //   queryKey: [user?.email, "isAdmin"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get
  //   }
  // });

  return <div></div>;
};

export default useAdmin;
