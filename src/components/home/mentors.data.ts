import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg',
    name: 'Jhon Dwirian',
    category: 'Thiết kế UI/UX',
    description:
      'Chuyên gia giàu kinh nghiệm với hơn 10 năm làm việc trong lĩnh vực thiết kế giao diện và trải nghiệm người dùng. Luôn sẵn sàng chia sẻ kiến thức và truyền cảm hứng cho học viên.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    name: 'Leon S Kennedy',
    category: 'Học Máy',
    description:
      'Kỹ sư AI hàng đầu với nhiều dự án thực tế về Học máy và Trí tuệ nhân tạo. Tận tâm hướng dẫn và giúp học viên nắm bắt các thuật toán phức tạp một cách dễ hiểu.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
    name: 'Nguyễn Thuy',
    category: 'Phát triển Android',
    description:
      'Nhà phát triển Android kỳ cựu đã xây dựng hàng loạt ứng dụng đạt hàng triệu lượt tải. Phong cách giảng dạy thực tế, tập trung vào việc giải quyết các bài toán thực tế.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
    name: 'Rizki Known',
    category: 'Phát triển Fullstack',
    description:
      'Kỹ sư Fullstack với khả năng làm chủ cả Frontend lẫn Backend. Có kinh nghiệm kiến trúc các hệ thống quy mô lớn và tối ưu hóa hiệu suất ứng dụng web.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
