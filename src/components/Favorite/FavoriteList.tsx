import { useState } from "react";
import CardFavorite from "./CardFavorite";
import ButtonFavorite from "./ButtonFavorite";
import type { Quote } from "./quote";
import { Icon } from "@iconify-icon/react";
import { AnimatePresence, motion } from "motion/react";

export default function FavoriteList({
  favourites,
  onRemove,
  isEmpty,
  isFull,
}: {
  favourites: Quote[];
  onRemove: (id: number) => void;
  isEmpty: boolean;
  isFull: boolean;
}) {
  const [closed, setClosed] = useState(true);

  return (
    <>
      <aside className="absolute top-4 right-4">
        <ButtonFavorite
          quantityFavorites={favourites.length}
          handleClick={() => setClosed(false)}
          isFull={isFull}
        />
      </aside>
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-all z-10 ${
          closed ? "bg-transparent pointer-events-none" : "bg-black/50"
        }`}
        onClick={() => setClosed(true)}
      ></div>
      <aside
        className={`
          fixed top-0 right-0 h-screen w-full md:w-1/3 lg:w-1/4 bg-indigo-900 border-l border-indigo-400 p-4
          transform transition-transform duration-300 ease-in-out z-20
          ${closed ? "translate-x-full" : "translate-x-0"}
        `}
      >
        <section className="flex items-center justify-between mb-4  py-2">
          <div className="flex items-center gap-4">
            <Icon
              icon="mdi:cards-heart-outline"
              className="text-indigo-100 text-lg md:text-2xl"
            />
            <h2 className="text-lg md:text-xl font-light text-indigo-100">
              Favourites ({favourites.length}/5)
            </h2>
          </div>
          <Icon
            icon="mdi:close"
            width="24"
            height="24"
            className="text-indigo-100 cursor-pointer hover:text-indigo-300 transition-all"
            onClick={() => setClosed(true)}
          />
        </section>
        <hr className="text-indigo-200 my-2" />
        <motion.section
          layout
          className="pt-2 pb-12 overflow-auto h-full"
        >
          <AnimatePresence mode="popLayout">
            {isEmpty ? (
              <div className="flex flex-col items-center justify-center">
                <Icon
                  icon="mdi:heart-off-outline"
                  className="text-indigo-300 mt-5 text-[90px]"
                />
                <h3 className="text-indigo-100 text-lg text-center mt-5 mb-3">
                  No favourite quotes yet.
                </h3>
                <p className="text-indigo-200 text-sm text-center">
                  Click the heart icon on quotes to save them here!
                </p>
              </div>
            ) : (
              favourites.map((favourite) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  key={favourite.id}
                  layout
                  transition={{ duration: 0.3 }}
                >
                  <CardFavorite
                    key={favourite.id}
                    text={favourite.quote}
                    category={favourite.category}
                    author={favourite.author}
                    id={favourite.id}
                    onRemove={onRemove}
                  />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.section>
      </aside>
    </>
  );
}
