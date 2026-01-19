import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { EditPostForm } from '@/components/dashboard/EditPostForm'

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: PageProps) {
    const { id } = await params
    const supabase = await createClient()

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

    if (!post) {
        notFound()
    }

    return (
        <div>
            <EditPostForm post={post} />
        </div>
    )
}
