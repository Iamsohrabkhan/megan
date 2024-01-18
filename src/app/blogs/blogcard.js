import Link from "next/link";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import formatDate from "@/lib/formatDate";

const BlogCard = ({ posts }) => {
  return (
    <article>
      <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 container">
        {posts?.map((item, key) => (
          <li className="w-full mx-auto group sm:max-w-sm" key={key}>
            <Link href={`/blogs/${item.slug.current}`}>
              <div className="w-full h-72 relative rounded-lg hover:opacity-60">
                <Image
                  src={urlForImage(item?.mainImage?.asset?._ref)}
                  fill
                  alt={item?.title}
                  className="w-full rounded-lg "
                />
              </div>
              <div className="mt-3 space-y-2">
                <span className="block text-[#51a2d4] text-sm">
                  {formatDate(item?.publishedAt)}
                </span>
                <h3 className="text-lg text-primary duration-150 group-hover:text-[#7C96A6] font-semibold line-clamp-2">
                  {item?.title}
                </h3>
                <p className="text-gray-600 text-sm duration-150 line-clamp-3">
                  {item?.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default BlogCard;
