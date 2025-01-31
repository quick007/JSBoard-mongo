import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";

import Navbar from "../../../components/misc/navbar";
import Footer from "../../../components/misc/footer";
import PageError from "../../../components/misc/error";
import fetcher from "../../../lib/fetcher";
import Edit from "../../../components/profile/edit";
import PP from "../../../components/profile/pp";
import Activity from "./../../../components/profile/activity";
import Info from "../../../components/profile/info";

export default function ViewUserProfile() {
  const currentUser = "2"; //set what user number you are
  const router = useRouter();
  const { userID } = router.query;
  const [menuSel, setMenuSel] = useState(1);

  const { data, error } = useSWR(
    "/api/user/data?id=" + (userID || "0").toString(),
    fetcher
  );

  if (error)
    return (
      <>
        <PageError
          code={500}
          text="An error occured while loading this!"
          back={false}
          home={false}
        />
      </>
    );

  if (!data)
    return (
      <>
        {" "}
        {/*Loading animation*/}
        <div className="flex-grow bg-coolGray-700">
          <Navbar name="Loading..." />
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row rounded-md shadow-md flex-grow bg-coolGray-800 p-5 my-10 text-gray-200 space-y-4 md:space-x-4 md:space-y-0">
              <div className="flex flex-col items-center space-y-4 bg-coolGray-900 p-4 rounded-md shadow hover:shadow-xl bg-opacity-70 text-gray-200">
                <Image
                  src="/ProfilePicture.png"
                  width="200"
                  height="200"
                  alt="Profile Picture"
                  quality="100"
                  className="rounded-full"
                />
                <div className="flex items-center flex-col animate-pulse space-y-2">
                  <div className="h-6 w-48 bg-theme-primary rounded" />
                  <div className="h-4 w-36 bg-theme-primary rounded" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-md shadow-md bg-coolGray-800 p-3 text-center">
                    <div className="from-green-500 to-green-700 mb-4 rounded py-2 bg-gradient-to-r opacity-90">
                      <h2 className="text-2xl opacity-100 break-words">
                        Reputation
                      </h2>
                    </div>
                    <div className="h-4 w-32 bg-theme-primary rounded mx-auto animate-pulse mt-2" />
                    <div className="h-4 w-24 bg-theme-primary rounded mx-auto animate-pulse mt-2" />
                    <div className="h-4 w-28 bg-theme-primary rounded mx-auto animate-pulse mt-2" />
                  </div>
                  <div className="flex-none rounded-md shadow-md bg-coolGray-800 p-3 text-center">
                    <div className="from-blue-500 to-blue-600 mb-4 rounded py-2 bg-gradient-to-r opacity-90">
                      <h2 className="text-2xl opacity-100 break-words">
                        About
                      </h2>
                    </div>
                    <div className="h-4 w-32 bg-theme-primary rounded mx-auto animate-pulse mt-2" />
                    <div className="h-4 w-28 bg-theme-primary rounded mx-auto animate-pulse mt-2" />
                  </div>
                  <div className="flex-none rounded-md shadow-md bg-coolGray-800 p-3 text-center">
                    <div className="from-red-600 to-yellow-600 mb-4 rounded py-2 bg-gradient-to-r opacity-90">
                      <h2 className="text-2xl opacity-100 break-words">
                        Followers
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div />
                      <div className=" bg-gray-800 rounded-md px-2 pt-2 hover:ring-2 ring-theme-primary cursor-pointer">
                        <Image
                          src="/ProfilePicture.png"
                          width="50"
                          height="50"
                          alt="example pfp"
                          className="rounded"
                          quality="25"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-none rounded-md shadow-md bg-coolGray-800 p-3 text-center">
                    <div className="from-indigo-600 to-pink-600 mb-4 rounded py-2 bg-gradient-to-r opacity-90">
                      <h2 className="text-2xl opacity-100 break-words">
                        Following
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div />
                      <div className=" bg-gray-800 rounded-md px-2 pt-2 hover:ring-2 ring-theme-primary cursor-pointer">
                        <Image
                          src="/ProfilePicture.png"
                          width="50"
                          height="50"
                          alt="example pfp"
                          className="rounded"
                          quality="25"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Right Colloum */}
              <div className="flex flex-col items-center flex-grow space-y-4 bg-coolGray-900 transition p-4 rounded-md shadow md:hover:shadow-xl bg-opacity-70">
                <div className="w-full rounded-md h-48 bg-gradient-to-br from-theme-primary to-green-500 relative " />
                {/*selector */}
                <div className="rounded-md flex flex-wrap p-1.5 bg-coolGray-800 gap-2 font-semibold">
                  <h1
                    className={
                      "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                      ([1].includes(menuSel) ? "bg-coolGray-900" : "")
                    }
                    onClick={() => setMenuSel(1)}
                  >
                    Profile Posts
                  </h1>
                  <h1
                    className={
                      "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                      ([2].includes(menuSel) ? "bg-coolGray-900" : "")
                    }
                    onClick={() => setMenuSel(2)}
                  >
                    Activity
                  </h1>
                  <h1
                    className={
                      "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                      ([3].includes(menuSel) ? "bg-coolGray-900" : "")
                    }
                    onClick={() => setMenuSel(3)}
                  >
                    Information
                  </h1>
                </div>
                <div className="flex w-full rounded-md bg-coolGray-800 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );

  if (!userID)
    return (
      <PageError
        code={404}
        text="Sorry but we couldn't find what you were looking for!"
        back={true}
        home={true}
      />
    );

  if (!data.configured)
    return (
      <>
        <PageError
          code={500}
          text="JSBoard is not configured! Please configure it"
          redirect="/setup"
          redirectname="Configure JSBoard"
          back={true}
          home={true}
        />
      </>
    );
  if (data.error === 404)
    return (
      <PageError code={404} text="User not found!" back={true} home={true} />
    );

  return (
    <>
      <div className="flex-grow bg-coolGray-700">
        <Navbar name={data.username + "'s Profile"} />
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start rounded-md shadow-md flex-shrink bg-coolGray-800 p-5 my-10 text-gray-200 space-y-4 lg:space-x-4 lg:space-y-0">
            {/*Left Colloum */}
            <div className="flex flex-col items-center space-y-4 bg-coolGray-900 transition p-4 rounded-md shadow md:hover:shadow-xl bg-opacity-70 text-gray-200 sticky">
              <Image
                src={data.pfp}
                width="200"
                height="200"
                alt="Profile Picture"
                quality="100"
                className="rounded-full"
              />
              <div className="text-center">
                <h2 className="text-2xl font-medium">{data.username}</h2>
                <p className="text-sm font-light">{data.title}</p>
              </div>
              {/*Boxes*/}
              <div className="space-y-4">
                {/*Rep*/}
                <div className="flex-none rounded-md shadow-md bg-coolGray-800 p-3 text-center">
                  <div className="from-green-500 to-green-700 mb-4 rounded py-2 bg-gradient-to-r opacity-90">
                    <h2 className="text-2xl opacity-100 break-words">
                      Reputation
                    </h2>
                  </div>
                  <p className="text-sm font-semibold">
                    <span className="text-gray-400">Messages Sent: </span>
                    {data.activity.msgs}
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="text-gray-400">Posts Created: </span>
                    {data.activity.posts}
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="text-gray-400">Likes Recived: </span>
                    {data.activity.likes}
                  </p>
                </div>
                {/*About*/}
                <div className="flex-none rounded-md shadow-md bg-coolGray-800 p-3 text-center">
                  <div className="from-blue-500 to-blue-600 mb-4 rounded py-2 bg-gradient-to-r opacity-90">
                    <h2 className="text-2xl opacity-100 break-words">About</h2>
                  </div>
                  <p className="text-sm font-semibold">
                    <span className="text-gray-400">Last Seen: </span>
                    {data.activity.seen}
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="text-gray-400">Joined: </span>
                    {data.activity.joined}
                  </p>
                </div>
                {/*Followers*/}
                <div className="flex-none rounded-md shadow-md bg-coolGray-800 p-3 text-center">
                  <div className="from-red-600 to-yellow-600 mb-4 rounded py-2 bg-gradient-to-r opacity-90">
                    <h2 className="text-2xl opacity-100 break-words">
                      Followers ({data.followers.length})
                    </h2>
                  </div>
                  {/*Mapping*/}
                  <div className="grid grid-cols-3 gap-4">
                    {data.followers.slice(0, 9).map((d) => (
                      <div className=" bg-gray-800 rounded-md px-2 pt-2 hover:ring-2 ring-theme-primary cursor-pointer transition">
                        <Link href={"/profile/" + d.id}>
                          <Image
                            src={d.image}
                            width="50"
                            height="50"
                            alt={d.username + "'s profile picture"}
                            className="rounded"
                            quality="50"
                          />
                        </Link>
                      </div>
                    ))}
                    <div className={data.followers.length < 9 ? "hidden" : ""}>
                      <Link href={"/profile/" + userID + "/followers"}>
                        <a className="link">View all</a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*Following*/}
                <div className="flex-none rounded-md shadow-md bg-coolGray-800 p-3 text-center">
                  <div className="from-indigo-600 to-pink-600 mb-4 rounded py-2 bg-gradient-to-r opacity-90">
                    <h2 className="text-2xl opacity-100 break-words">
                      Following ({data.following.length})
                    </h2>
                  </div>
                  {/*Mapping*/}
                  <div className="grid grid-cols-3 gap-4">
                    {data.following.slice(0, 9).map((d) => (
                      <div className=" bg-gray-800 rounded-md px-2 pt-2 hover:ring-2 ring-theme-primary cursor-pointer transition">
                        <Link href={"/profile/" + d.id}>
                          <Image
                            src={d.image}
                            width="50"
                            height="50"
                            alt={d.username + "'s profile picture"}
                            className="rounded"
                            quality="50"
                          />
                        </Link>
                      </div>
                    ))}
                    <div className={data.following.length < 9 ? "hidden" : ""}>
                      <Link href={"/profile/" + userID + "/following"}>
                        <a className="link">View all</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Right Colloum */}
            <div className="flex flex-col items-center flex-grow space-y-4 bg-coolGray-900 transition p-4 rounded-md shadow md:hover:shadow-xl bg-opacity-70">
              <div
                className={
                  "w-full rounded-md h-48 bg-gradient-to-br from-theme-primary to-green-500 relative " +
                  (userID == currentUser ? "group" : "")
                }
              >
                <CameraIcon className="z-10 w-10 h-10 absolute bottom-2 right-3 p-2 hidden group-hover:block rounded cursor-pointer backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40" />
              </div>
              {/*selector */}
              <div className="rounded-md flex flex-wrap p-1.5 bg-coolGray-800 gap-2 font-semibold">
                <h1
                  className={
                    "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                    ([1].includes(menuSel) ? "bg-coolGray-900" : "")
                  }
                  onClick={() => setMenuSel(1)}
                >
                  Profile Posts
                </h1>
                <h1
                  className={
                    "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                    ([2].includes(menuSel) ? "bg-coolGray-900" : "")
                  }
                  onClick={() => setMenuSel(2)}
                >
                  Activity
                </h1>
                <h1
                  className={
                    "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
                    ([3].includes(menuSel) ? "bg-coolGray-900" : "")
                  }
                  onClick={() => setMenuSel(3)}
                >
                  Information
                </h1>
                {editProfBtn()}
              </div>
              <div className="w-full rounded-md bg-coolGray-800 mt-2 p-3">
                <PP page={menuSel} />
                <Activity page={menuSel} />
                <Info page={menuSel} rank={data.rank} />
                <Edit
                  page={menuSel}
                  user={data.username}
                  email={data.account.email}
                  phone={data.account.phone}
                  pass={data.account.password}
                  twofa /*2fa*/={data.account.twofa}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

  function editProfBtn() {
    if (userID !== currentUser) {
      return null;
    } else {
      return (
        <h1
          className={
            "cursor-pointer px-2 py-1 rounded hover:ring-2 ring-theme-primary select-none transition " +
            ([4].includes(menuSel) ? "bg-coolGray-900 " : "")
          }
          onClick={() => setMenuSel(4)}
        >
          Edit Profile
        </h1>
      );
    }
  }
}
