import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Dễ dàng truy cập',
    description: 'Học tập mọi lúc mọi nơi trên mọi thiết bị một cách dễ dàng và thuận tiện.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Chi phí hợp lý hơn',
    description: 'Tiết kiệm chi phí với các khóa học chất lượng cao và giá cả phải chăng.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Thời gian học linh hoạt',
    description: 'Tự do sắp xếp thời gian học tập phù hợp với lịch trình cá nhân của bạn.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Tư vấn với Giảng viên',
    description: 'Nhận sự hướng dẫn và giải đáp thắc mắc trực tiếp từ các chuyên gia.',
    icon: <ContactSupportIcon />,
  },
]
