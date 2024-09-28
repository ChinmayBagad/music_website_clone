import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  const genresTitle = "Pop";

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center w-full sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold font-3xl text-white">
          Discover {genresTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black bg-opacity-70 text-gray-300 p-3 text-sm rounded-lg outline-none border-none sm:mt-0 mt-5"
        >
          {genres.map((gen) => (
            <option key={gen.value} value={gen.value}>
              {gen.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
