import React from "react";
import { FaRegFile } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdOutlineDownloading } from "react-icons/md";

const Card = ({ data, reference }) => {
	return (
		<motion.div
			drag
			dragConstraints={reference}
			whileDrag={{ scale: 1.2 }}
			dragElastic={0.2}
			dragTransition={{ bounceStiffness: 800, bounceDamping: 12 }}
			className=" relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white overflow-hidden px-8 py-10"
		>
			<FaRegFile />
			<p className="text-sm leading-tight mt-5 font-semibold  ">{data.des}</p>
			<div className=" footer absolute bottom-0  w-full   left-0 ">
				<div className="flex items-center justify-between px-8 py-3 mb-3">
					<h5>{data.fileSize}</h5>
					<span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
						{data.close ? <IoClose /> : <MdOutlineDownloading />}
					</span>
				</div>
				{data.tag.isOpen && (
					<div
						className={`tag w-full py-4 ${
							data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
						} flex items-center justify-center`}
					>
						<h3 className="text-sm font-semibold "> {data.tag.tagTitle}</h3>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default Card;
