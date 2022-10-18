import { useEffect, useRef, useState } from "react";
import { APISlice } from "../modules/OrdersSlice";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../redux/selector";
import { Switch } from "@headlessui/react";
import { FilterSlice } from "../modules/FilterSlice";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [isEnabled, setEnabled] = useState(false);
  const dataFetchedRef = useRef(false);

  const dispatch = useDispatch();

  const userSelector = useSelector(usersSelector);

  const handleSearchText = (e: any) => {
    setSearchText(e.target.value);
    dispatch(FilterSlice.actions.FILTERNAME(e.target.value));
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(APISlice.actions.GETUSERINFO());
  }, []);

  // useEffect(() => {
  //   console.log(userSelector);
  // }, [isEnabled]);

  return (
    <div className="">
      <div className="fixed flex flex-row justify-between top-0 left-0 right-0 z-50 pb-4 bg-[#27272A]">
        <div></div>
        <div className="SearchContainer flex items-end flex-row bg-[#27272A] pt-4 min-w-[40%]">
          <div className="SearchBox mr-8 min-w-[70%]">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-indigo-500 pl-0.5"
            >
              Search
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-gray-300 mt-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-transparent text-slate-200"
              placeholder={"text"}
              onChange={handleSearchText}
            />
            <div className="absolute inset-y-0 right-0 flex items-center"></div>
          </div>
          <div className="Toggle">
            <Switch
              checked={isEnabled}
              onChange={setEnabled}
              className={`${
                isEnabled ? "bg-indigo-500" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  isEnabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchBox;
