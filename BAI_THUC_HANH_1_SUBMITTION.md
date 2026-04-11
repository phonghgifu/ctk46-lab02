# BÀI THỰC HÀNH 1: CÁC CÔNG NGHỆ MỚI TRONG PTPM

## 📋 THÔNG TIN SINH VIÊN

- **Họ và tên**: Ngô Văn Phong
- **MSSV**: 2212440
- **Lớp**: CTK46A
- **Năm học**: 2026
- **Môn học**: Các công nghệ mới trong PTPM

---

## 📚 THÔNG TIN REPOSITORY

- **Repository Name**: ctk46-lab01
- **GitHub Link**: https://github.com/phonghgifu/ctk46-lab01
- **Repository Type**: Public
- **Project Type**: Next.JS + React + TypeScript + Tailwind CSS

---

## ✅ CHECKLIST HOÀN THÀNH

### Phần 1: Cài Đặt & Cấu Hình
- ✅ Node.js v24.14.0
- ✅ NPM v11.9.0
- ✅ Git configured với user "Phong Nguyen"
- ✅ VS Code + extensions (Prettier, TypeScript, GitHub Copilot)
- ✅ SSH Key + GitHub connection

### Phần 2: GitHub Copilot CLI
- ✅ Cài đặt v1.0.24
- ✅ Authenticate với GitHub account (phonghgifu)
- ✅ 5 tasks hoàn thành:
  1. Hàm tính tổng số chẵn (Even sum function)
  2. Giải thích find command
  3. Tạo hello.js
  4. Dùng /plan command
  5. Lên kế hoạch website

### Phần 3: Gemini CLI
- ✅ Cài đặt v0.37.1
- ✅ Authenticate với Google
- ✅ 4 tasks hoàn thành:
  1. File reference (@bai-tap-copilot.js)
  2. Giải thích code
  3. Tạo hello_gemini.js
  4. --approval-mode=plan

### Phần 4: Git Workflow & GitHub
- ✅ 13 commits Phase 1 (feat, fix, docs, chore)
- ✅ Branching practice:
  - feature/trang-gioi-thieu
  - feature/english-greeting
  - feature/update-config
- ✅ Merge conflict resolution (config.json)
- ✅ Push to GitHub ✅

### Phần 5: Next.JS Project
- ✅ Khởi tạo với Recommended Defaults
- ✅ TypeScript (.tsx files)
- ✅ Tailwind CSS
- ✅ ESLint
- ✅ Turbopack
- ✅ App Router (app/ directory)
- ✅ 5 new commits:
  1. feat: khoi tao project Next.JS voi thong tin ca nhan (7a02082)
  2. docs: cap nhat README voi thong tin du an (6e260c9)
  3. feat: them file cau hinh du an (ba6afcb)
  4. feat: them trang about me (d055dd6)
  5. style: cai thien CSS (e85e4e6)

### Phần 6: Chỉnh Sửa & Hoàn Thành
- ✅ Trang chủ (app/page.tsx):
  - Tiêu đề: "Xin chào! 👋"
  - Họ và tên: Ngô Văn Phong
  - MSSV: 2212440
  - Lớp: CTK46A
  - Giới thiệu cá nhân
  - Sở thích & mục tiêu
- ✅ Trang About (app/about/page.tsx):
  - Thông tin chi tiết
  - Sở thích
  - Kỹ năng
- ✅ Layout (app/layout.tsx):
  - Title: "CTK46 - Lab 01 - Next.JS"
  - Language: "vi" (Tiếng Việt)
- ✅ CSS improvements (globals.css):
  - Smooth scroll
  - Transitions
  - Custom heading styles

---

## 📊 THỐNG KÊ COMMITS

### Tất Cả Commits (18 total)

**Phase 1: Git Workflow (13 commits)**
```
443cea2 - chore: cập nhật thông tin cá nhân - Ngo Van Phong CTK46A
ae1517e - chore: thêm file .gitignore
a2f99f2 - fix: giải quyết conflict config.json
3d96cf5 - feat: cập nhật tác giả và năm
cc66644 - feat: cập nhật config
9023d95 - chore: thêm file cấu hình
06b6df9 - feat: cập nhật greeting sang tiếng Anh
c29a030 - feat: thêm biến greeting trên master
2c180c9 - feat: thêm trang giới thiệu
2d51f3e - fix: xử lý trường hợp tham số không phải số
e326df7 - feat: thêm hàm tiện ích cộng và trừ
6145843 - docs: cập nhật nội dung README
e26662a - feat: thêm file hello.js với lời chào
```

**Phase 5: Next.JS Project (5 commits)**
```
e85e4e6 - style: cai thien CSS voi smooth scroll va animation
d055dd6 - feat: them trang about me voi thong tin chi tiet
ba6afcb - feat: them file cau hinh du an
6e260c9 - docs: cap nhat README voi thong tin du an va sinh vien
7a02082 - feat: khoi tao project Next.JS voi thong tin ca nhan
```

### Phân Loại Commits

| Type | Count | Chức Năng |
|------|-------|----------|
| feat | 10 | Tính năng mới |
| fix | 2 | Sửa lỗi |
| docs | 2 | Tài liệu |
| chore | 3 | Bảo trì |
| style | 1 | Cải thiện CSS |
| **TOTAL** | **18** | - |

---

## 📁 CẤU TRÚC PROJECT

```
ctk46-lab01/
├── app/
│   ├── about/
│   │   └── page.tsx              # Trang About Me
│   ├── layout.tsx                # Layout chính (lang="vi")
│   ├── page.tsx                  # Trang chủ (custom)
│   ├── globals.css               # CSS global + improvements
│   └── favicon.ico               # Icon trang web
├── public/
│   ├── next.svg
│   ├── vercel.svg
│   ├── globe.svg
│   ├── window.svg
│   └── file.svg
├── project.config.json           # Cấu hình dự án
├── package.json                  # Dependencies
├── package-lock.json
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.JS config
├── tailwind.config.ts            # Tailwind CSS config
├── postcss.config.mjs            # PostCSS config
├── eslint.config.mjs             # ESLint config
├── .gitignore                    # Git ignore rules
├── README.md                     # Project documentation
├── AGENTS.md
├── CLAUDE.md
└── .git/                         # Git repository

Tổng: 30+ files, 6840+ lines of code
```

---

## 🌐 TRANG WEB - LOCALHOST:3000

### Trang Chủ (/)
```
✨ Xin chào! 👋

Họ và tên: Ngô Văn Phong
MSSV: 2212440
Lớp: CTK46A
Môn: Các công nghệ mới trong PTPM

"Tôi là sinh viên đam mê công nghệ và luôn học hỏi 
để phát triển kỹ năng lập trình."

🚀 Đây là project Next.JS đầu tiên của tôi!

💪 Sở thích: Lập trình, Giải quyết vấn đề, 
Học tập các công nghệ mới
```

### Trang About (/about)
```
✨ Về Tôi

Ngô Văn Phong
Sinh viên lớp CTK46A - MSSV: 2212440

Sở Thích:
💻 Lập trình
📚 Học tập công nghệ mới
🧩 Giải quyết vấn đề
🤝 Làm việc nhóm

Kỹ Năng:
JavaScript • React • Next.js • TypeScript • Git • Tailwind CSS
```

---

## 🚀 CÁC CÔNG NGHỆ ĐƯỢC SỬ DỤNG

### Frontend
- **React 19**: Library phát triển giao diện
- **Next.js 16.2.3**: React framework
- **TypeScript**: Ngôn ngữ lập trình có kiểu
- **Tailwind CSS**: Utility-first CSS framework
- **Turbopack**: Công cụ build nhanh

### Development Tools
- **Git**: Quản lý phiên bản
- **GitHub**: Repository hosting
- **VS Code**: Code editor
- **ESLint**: Code quality
- **Prettier**: Code formatter

### AI Development Tools
- **GitHub Copilot CLI**: AI-powered coding (v1.0.24)
- **Gemini CLI**: Google's AI assistant (v0.37.1)

### Development Environment
- **Node.js**: v24.14.0
- **npm**: v11.9.0
- **PowerShell**: Terminal

---

## 📝 HƯỚNG DẪN CHẠY PROJECT

### 1. Clone Repository
```bash
git clone https://github.com/phonghgifu/ctk46-lab01.git
cd ctk46-lab01
```

### 2. Cài Đặt Dependencies
```bash
npm install
```

### 3. Chạy Dev Server
```bash
npm run dev
```

### 4. Mở Trình Duyệt
```
http://localhost:3000
```

### 5. Trang Khả Dụng
- http://localhost:3000/          ← Trang chủ
- http://localhost:3000/about     ← Trang About Me

### 6. Dừng Dev Server
```
Ctrl+C trong terminal
```

---

## 📋 HOÀN THÀNH 100%

✅ Cài đặt Node.js, VS Code, Git  
✅ Cấu hình VS Code  
✅ Tạo SSH Key + GitHub  
✅ GitHub Copilot VS Code  
✅ GitHub Copilot CLI (5 tasks)  
✅ Gemini CLI (4 tasks)  
✅ Repository 18 commits  
✅ Branching & Conflict Resolution  
✅ Next.JS Project  
✅ Trang chủ custom  
✅ Push GitHub  

---

## 📞 GITHUB REPOSITORY

**👉 https://github.com/phonghgifu/ctk46-lab01**

---

**Ngô Văn Phong - CTK46A (2212440)**  
**Bài Thực Hành 1: Các Công Nghệ Mới Trong PTPM**  
**Năm 2026**
