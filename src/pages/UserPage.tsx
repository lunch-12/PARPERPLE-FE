import { ReactComponent as DefaultProfileImage } from '../assets/svg/DefaultProfileImage.svg';
import { ReactComponent as MyPaperIcon } from '../assets/svg/MyPaperIcon.svg';
import { ReactComponent as EditProfileIcon } from '../assets/svg/EditProfileIcon.svg';
import { ReactComponent as LogoutIcon } from '../assets/svg/LogoutIcon.svg';
import { ReactComponent as RightArrowIcon } from '../assets/svg/RightArrowIcon.svg';
import useAuthStore from '../stores/useAuthStore';

const UserPage = () => {
  const { isLoggedIn, nickname, profileImage, logout } = useAuthStore();

  return (
    <div className="w-full text-[14px]">
      <div className="w-full p-[16px]">
        {isLoggedIn ? (
          <div className="w-full h-[72px] bg-system-gray-6 rounded-[12px] text-teritary-title flex items-center px-[16px] py-[12px]">
            <img
              src={profileImage || ''}
              alt={`${nickname}의 프로필 이미지`}
              className="w-[48px] h-[48px] rounded-full"
            />
            <p className="ml-[12px] truncate">{nickname}</p>
          </div>
        ) : (
          <button className="w-full h-[72px] bg-system-gray-6 rounded-[12px] text-teritary-title flex items-center px-[16px] py-[12px]">
            <DefaultProfileImage />
            <p className="ml-[12px]">로그인</p>
          </button>
        )}
      </div>
      <ul className="w-full px-[20px] py-[10px] text-title">
        <button className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <MyPaperIcon />
            <p className="ml-[10px]">내 페이퍼</p>
          </div>
          <RightArrowIcon />
        </button>
        <button className="w-full flex items-center justify-between mt-[16px]">
          <div className="flex items-center">
            <EditProfileIcon />
            <p className="ml-[10px]">프로필 수정</p>
          </div>
          <RightArrowIcon />
        </button>
        <button className="flex items-center mt-[16px]" onClick={logout}>
          <LogoutIcon />
          <p className="ml-[10px]">로그아웃</p>
        </button>
      </ul>
    </div>
  );
};

export default UserPage;
