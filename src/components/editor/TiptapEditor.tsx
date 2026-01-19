'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import LinkExtension from '@tiptap/extension-link'
import ImageExtension from '@tiptap/extension-image'
import UnderlineExtension from '@tiptap/extension-underline'
import HighlightExtension from '@tiptap/extension-highlight'
import TextAlignExtension from '@tiptap/extension-text-align'
import {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Highlighter,
    AlignLeft,
    AlignCenter,
    AlignRight,
    List,
    ListOrdered,
    Quote,
    Heading1,
    Heading2,
    ImageIcon,
    Link as LinkIcon,
    Undo,
    Redo
} from 'lucide-react'

interface TiptapEditorProps {
    content: string
    onChange: (html: string) => void
}

export function TiptapEditor({ content, onChange }: TiptapEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            UnderlineExtension,
            HighlightExtension,
            TextAlignExtension.configure({
                types: ['heading', 'paragraph', 'image'],
            }),
            LinkExtension.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-primary underline decoration-primary/30 underline-offset-4 cursor-pointer',
                },
            }),
            ImageExtension.configure({
                // allowBase64: true, // Optional: if you want to support paste
                HTMLAttributes: {
                    class: 'rounded-xl shadow-lg my-8 max-h-[500px] object-cover w-full',
                },
            }),
        ],
        immediatelyRender: false,
        content: content,
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert max-w-none focus:outline-none min-h-[400px] p-6',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
    })

    if (!editor) {
        return null
    }

    const addImage = () => {
        const url = window.prompt('URL of the image:')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }

        // update
        try {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            {/* Toolbar */}
            <div className="sticky top-0 z-10 flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">

                {/* History */}
                <div className="flex items-center gap-1 mr-2">
                    <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} icon={Undo} tooltip="Undo" />
                    <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} icon={Redo} tooltip="Redo" />
                </div>
                <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1" />

                {/* Text Formatting */}
                <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} icon={Bold} tooltip="Bold" />
                <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} icon={Italic} tooltip="Italic" />
                <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} icon={Underline} tooltip="Underline" />
                <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')} icon={Strikethrough} tooltip="Strike" />
                <ToolbarButton onClick={() => editor.chain().focus().toggleHighlight().run()} isActive={editor.isActive('highlight')} icon={Highlighter} tooltip="Highlight" />

                <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1" />

                {/* Alignment */}
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} icon={AlignLeft} tooltip="Align Left" />
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} icon={AlignCenter} tooltip="Align Center" />
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} icon={AlignRight} tooltip="Align Right" />

                <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1" />

                {/* Headings */}
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })} icon={Heading1} tooltip="Heading 1" />
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} icon={Heading2} tooltip="Heading 2" />

                <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1" />

                {/* Lists & Quotes */}
                <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} icon={List} tooltip="Bullet List" />
                <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} icon={ListOrdered} tooltip="Ordered List" />
                <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} icon={Quote} tooltip="Quote" />

                <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1" />

                {/* Insert */}
                <ToolbarButton onClick={setLink} isActive={editor.isActive('link')} icon={LinkIcon} tooltip="Link" />
                <ToolbarButton onClick={addImage} isActive={false} icon={ImageIcon} tooltip="Image" />

            </div>

            <EditorContent editor={editor} />
        </div>
    )
}

function ToolbarButton({ onClick, isActive, disabled, icon: Icon, tooltip }: any) {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            disabled={disabled}
            type="button"
            title={tooltip}
            className={`p-2 rounded-lg transition-colors ${isActive
                ? 'bg-primary/10 text-primary'
                : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                } ${disabled ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
            <Icon size={18} />
        </button>
    )
}
