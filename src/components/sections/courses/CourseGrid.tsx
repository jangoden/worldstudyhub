import { CourseCard } from './CourseCard';

const courses = [
    {
        title: "Agri-Tech: Modern Poultry Farming",
        description: "Learn sustainable techniques for maximizing yield in poultry farming using modern technology.",
        category: "Agriculture",
        categoryIcon: "agriculture",
        categoryColor: "text-green-600",
        rating: "4.9",
        reviews: "1.2k",
        price: "₦ 15,000",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu7C67W8a_AuO2dOZFRTLzfKUzlndhHkyPI_g6pSMFdb1wTuMbUrz74gCyRjTybEWQNppR6MhJ34crWMHzU6lZyfFpZ0KIHVVqkrIfFoOjk1GtWaona1iQbNyUzpcOsSn-vmtUCyxHHBYBwVLQPLBc95XdzoXCs1y7hzjRloJqkLvxnf4mXSSgJGYMLD-Dm3DhgmvB7Q7Nxi0AZQAcjWRsQ71cHHnKP84YRVCC3fnFkhjWPSJm_g24hBFwFjJfF9o6h5lkVbqYo9pU"
    },
    {
        title: "Full Stack Web Dev with React",
        description: "Complete bootcamp covering HTML, CSS, JavaScript, React, Node.js and database management.",
        category: "Tech",
        categoryIcon: "code",
        categoryColor: "text-primary",
        rating: "4.8",
        reviews: "3.5k",
        price: "₦ 45,000",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCysEWGbMigzcq2pkxy5H_4Vco0a_ClMBIhg2EANmq3RDxsdK8QclxhIuUsapkKBR5ekZk49Cn2N08yLWzT-I6a0xUIO8y91_lCdtgFzh3iSBYE_Mx54LDfePnDoxKnodu4-zXqgEEFkfXrEINyxlcD8HinI9sdxET_B-enpQR6tITnmDxx2JpCZKWqSDydL7zsruFMvQeqPY0Aha6Ohh6R2hlc4TsI0NlfDvj8gJT1vRvj0S4U_XoOkntwjCKji3vTEFV_JnHTmG4j"
    },
    {
        title: "Digital Marketing for SMEs",
        description: "Master social media, SEO, and email marketing to grow your small business in Africa.",
        category: "Business",
        categoryIcon: "storefront",
        categoryColor: "text-purple-600",
        rating: "4.7",
        reviews: "950",
        price: "₦ 25,000",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAahUKhUA-bPs9KmWitp29YOKpSzouXO9KxUGEo518qyCAMScImoLPBMAJf6r5hzLgLY_pTSr-n2FfzrSlB1QxmYYBpZCJWZxC_nSnuvGmyQ_iacdswZF2M-qFg7CvC5eujIbUvYYuhr72xzn6vXpGsWqWc7BLOs1RHQ4RFRjU5GblHdnoA2WGVs4b7f7OSi9xhpnQGINC9PiFmqGBLfAO3JZGJephyCCJmX9UgT5uM1zuX4mbdIFT_2tcLPTcAD0iXhMbQGTmfCHrK"
    },
    {
        title: "Data Analysis with Excel & Python",
        description: "From basic Excel formulas to advanced Python data visualization libraries.",
        category: "Tech",
        categoryIcon: "analytics",
        categoryColor: "text-primary",
        rating: "4.9",
        reviews: "2.1k",
        price: "₦ 30,000",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBml-BUfTGEBY-CK1pACrSxNwN_kdyGAjVRW_-ihja1WtlzN3y9gWWl42_K4J8Ts7rQgSh2faGxXfWZKtkB5b--GMNSvGOXSKCn2Vdb6CFR2lOboaN2_-yNDRuUlb4Vt_H6VUv4a5JQRJkdLWHwsuHTmpN3GippVLIoFv5CuUUj2_oElnYxB4jUj-ztHuIJiyQhBVfxbGERMUzfBkZsvB2RzHPh6zu6DMa_Tq6fFtORATtpFSYU4-Y-AC_XF1S2F8XPbsNJbg-7FdA"
    }
];

export function CourseGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-8">
                <p className="text-slate-500 dark:text-slate-400 font-medium">Showing <span className="text-slate-900 dark:text-white font-bold">4</span> results</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    <span>Sort by:</span>
                    <select className="bg-transparent border-none py-0 pl-2 pr-8 focus:ring-0 cursor-pointer font-bold text-slate-900 dark:text-white">
                        <option>Most Popular</option>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </section>
    );
}
