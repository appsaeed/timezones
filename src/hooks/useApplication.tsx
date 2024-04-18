import { useSelector } from "react-redux";
import reducer from "../redux/reducer";

export default function useApplication() {
    return useSelector((state: ReturnType<typeof reducer>) => state.application);
}