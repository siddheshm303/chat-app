import { X } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useChatStore } from '../store/useChatStore';

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className='p-2.5 border-b border-base-300'>
      <div className='flex items-center'>
        {/* User Info Section */}
        <div className='flex items-center gap-3 flex-grow'>
          {/* Avatar */}
          <div className='avatar'>
            <div className='size-10 rounded-full'>
              <img src={selectedUser.profilePic || '/avatar.png'} alt={selectedUser.fullName} />
            </div>
          </div>

          {/* User Details */}
          <div>
            <h3 className='font-medium'>{selectedUser.fullName}</h3>
            <p className='text-sm text-base-content/70'>{onlineUsers.includes(selectedUser._id) ? 'Online' : 'Offline'}</p>
          </div>
        </div>

        {/* Close Button - This is now fixed */}
        <button onClick={() => setSelectedUser(null)} className='p-2'>
          <X />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
