import Image from "next/image";

interface Props {
  imageName: string;
  modName: string;
}

const Mod = ({ imageName, modName }: Props) => {
  return (
    <li className="h-[50px] flex px-[30px] gap-[30px] items-center bg-fadecyan border">
      <Image
        src={`/images/mods/${imageName}`}
        height={30}
        width={30}
        alt={modName}
      />
      <p className="text-[#6effff] text1 filter-text-common">{modName}</p>
    </li>
  );
};

export default Mod;
