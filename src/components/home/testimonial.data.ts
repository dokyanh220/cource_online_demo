import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Tài liệu học tập chi tiết',
    content:
      'Các lớp học cung cấp tài liệu rất chi tiết về thiết kế UI/UX, từ việc tạo thiết kế wireframe đến thiết kế chất lượng cao, thiết kế hệ thống, sử dụng bố cục dữ liệu, tạo nguyên mẫu và thử nghiệm.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'Kỹ sư UI/UX',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Khóa học trực tuyến chất lượng nhất!',
    content:
      'Khóa học rất hữu ích và mang lại nhiều kiến thức thực tế. Giảng viên hướng dẫn tận tình, giúp tôi nắm bắt kiến thức một cách nhanh chóng và áp dụng ngay vào công việc thực tế của mình.',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'Kỹ sư Phần mềm',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Lớp học rất đầy đủ',
    content:
      'Nội dung khóa học bám sát với thực tế, cung cấp đầy đủ những kiến thức và kỹ năng cần thiết. Tôi đã có thể tự tin xây dựng các ứng dụng hoàn chỉnh sau khi hoàn thành khóa học này.',
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'Nhà thiết kế FullStack',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Chất lượng tuyệt vời!',
    content:
      'Tuyệt vời! Tôi đã học được rất nhiều điều mới mẻ và hữu ích. Phương pháp giảng dạy rất sinh động và dễ hiểu. Rất khuyến khích cho bất kỳ ai muốn nâng cao kỹ năng của mình.',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'Chuyên gia SEO',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Tài liệu học tập phong phú',
    content:
      'Tài liệu đi kèm khóa học rất phong phú và được tổ chức khoa học. Tôi có thể dễ dàng tra cứu lại kiến thức và thực hành theo các dự án mẫu một cách trực quan nhất.',
    user: {
      id: 1,
      name: 'Ashley Graham',
      professional: 'Lập trình viên Back-End',
      photo: '5.jpg',
    },
  },
]
