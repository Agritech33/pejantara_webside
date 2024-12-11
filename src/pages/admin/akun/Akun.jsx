const AdminAkunPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#2b2b2b]">Profil Anda</h1>
        <div className="flex items-center space-x-2">
          <i className="fas fa-bell text-[#2b2b2b]"></i>
          <div className="flex items-center space-x-1">
            <img src="https://placehold.co/30x30" alt="User avatar" className="w-8 h-8 rounded-full" />
            <span className="text-[#2b2b2b]">Alex saiful</span>
            <i className="fas fa-chevron-down text-[#2b2b2b]"></i>
          </div>
        </div>
      </div>
      <div className="relative mb-6">
        <img src="../BgAkun.png" alt="Profile background" className="w-full h-60 object-cover rounded-lg" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className=" p-4 rounded-full">
          <img src="../logo.png" alt="User avatar" className="w-24 h-24 rounded-full" />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg ">
        <div className="flex justify-between bg-background space-y-3 rounded-xl">
          <span className="text-[#2b2b2b] p-3">Nama Lengkap</span>
          <span className="text-[#2b2b2b] p-3">Alex Saiful</span>
        </div>
        <div className="flex justify-between bg-background mb-4">
          <span className="text-[#2b2b2b] p-3">Status</span>
          <span className="text-[#2b2b2b] p-3">Admin 1</span>
        </div>
        <div className="flex justify-between bg-background space-y-3">
          <span className="text-[#2b2b2b] p-3">Tanggal Lahir</span>
          <span className="text-[#2b2b2b] p-3">14 Oktober 1992</span>
        </div>
        <div className="flex justify-between bg-background mb-4">
          <span className="text-[#2b2b2b] p-3">Jenis Kelamin</span>
          <span className="text-[#2b2b2b] p-3">Laki - laki</span>
        </div>
        <div className="flex justify-between bg-background">
          <span className="text-[#2b2b2b] p-3">No. Handphone</span>
          <span className="text-[#2b2b2b] p-3">0811293721204</span>
        </div>
        <div className="flex justify-between bg-background">
          <span className="text-[#2b2b2b] p-3">Email</span>
          <span className="text-[#2b2b2b] p-3">saifulalex@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default AdminAkunPage;
