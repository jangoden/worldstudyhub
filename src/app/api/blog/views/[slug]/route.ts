import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const supabase = await createClient();

    // 1. Get current view count
    const { data: post, error: fetchError } = await supabase
        .from('posts')
        .select('views')
        .eq('slug', slug)
        .single();

    if (fetchError) {
        return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }

    const currentViews = post?.views || 0;

    // 2. Increment
    const { error: updateError } = await supabase
        .from('posts')
        .update({ views: currentViews + 1 })
        .eq('slug', slug);

    if (updateError) {
        return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, views: currentViews + 1 });
}
