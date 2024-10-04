'use client'
import { Button, Input } from '@/sdk/components'
import { useFrameConfig } from '@/sdk/hooks'
import { Configuration } from '@/sdk/inspector'
import { useRef } from 'react'
import type { Config } from '.'

export default function Inspector() {
    const [config, updateConfig] = useFrameConfig<Config>()


    const displayLabelInputRef = useRef<HTMLInputElement>(null)

    return (
        <Configuration.Root>
            <Configuration.Section title="Set fan token to buy">
               
                 <div className="flex flex-col gap-2 ">
                    <Input
                        className="text-lg"
                        placeholder="username"
                        ref={displayLabelInputRef}
                    />
                    <Button
                        onClick={() => {
                            if (!displayLabelInputRef.current?.value) return

                            updateConfig({ text: displayLabelInputRef.current.value })

                            displayLabelInputRef.current.value = ''
                        }}
                        className="w-full bg-border hover:bg-secondary-border text-primary"
                    >
                        Set Fan Token
                    </Button>
                </div>

           
            </Configuration.Section>
        </Configuration.Root>
    )
}
