import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/cart?email=${user.email}`);
        console.log(res.data); // Log the data inside the try block
        return res.data;
      } catch (error) {
        console.error("Error fetching cart:", error);
        throw error; // Rethrow the error to let React Query handle it
      }
    },
  });

  return [cart, refetch];
};

export default useCart;
