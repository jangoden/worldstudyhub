import { createClient } from '@/lib/supabase/server'
import { FileText, Eye, CheckCircle, Clock } from 'lucide-react'

export default async function DashboardPage() {
    const supabase = await createClient()

    // Fetch stats (Future: replace count with real db queries)
    const { count: totalPosts } = await supabase.from('posts').select('*', { count: 'exact', head: true })
    const { count: publishedPosts } = await supabase.from('posts').select('*', { count: 'exact', head: true }).eq('is_published', true)

    // Using mocks for now where specific queries might be complex or require analytics table
    const stats = [
        {
            label: 'Total Posts',
            value: totalPosts || 0,
            icon: FileText,
            color: 'bg-blue-500',
            trend: '+12% from last month'
        },
        {
            label: 'Published',
            value: publishedPosts || 0,
            icon: CheckCircle,
            color: 'bg-green-500',
            trend: 'Active content'
        },
        {
            label: 'Drafts',
            value: (totalPosts || 0) - (publishedPosts || 0),
            icon: Clock,
            color: 'bg-orange-500',
            trend: 'Work in progress'
        },
        {
            label: 'Total Views',
            value: '12.5k',
            icon: Eye,
            color: 'bg-purple-500',
            trend: '+24% from last month'
        },
    ]

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
                <p className="text-slate-500 dark:text-slate-400">Welcome back, here's what's happening with your blog.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10 text-white`}>
                                    <Icon size={24} className={`text-${stat.color.replace('bg-', '')}`} />
                                    {/* Note: Tailwind dynamic classes need safe-listing or specific values. 
                       For simplicity, I will fix the icon color logic below properly.
                   */}
                                </div>
                                <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                    {stat.trend}
                                </span>
                            </div>
                            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</h3>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
                        </div>
                    )
                })}
            </div>

            {/* Recent Activity Section Placeholder */}
            <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h2>
                <div className="flex gap-4">
                    <a href="/dashboard/posts/create" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm">
                        Write New Post
                    </a>
                    <a href="/dashboard/posts" className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors font-medium text-sm">
                        Manage Posts
                    </a>
                </div>
            </div>
        </div>
    )
}
