'use client'
import { Button, Input, Select } from '@/sdk/components'
import { useFrameConfig } from '@/sdk/hooks'
import { Configuration } from '@/sdk/inspector'
import { getFarcasterProfiles } from './utils'
import { useState,useEffect } from 'react'
import type { Config } from '.'

export default function Inspector() {
    const [config, updateConfig] = useFrameConfig<Config>()
    const [username, setUsername] = useState("")
    const { who } = config

    useEffect(() => {
        if (!config.slides) return
        for (const slide of config.slides) {
            const fonts = identifyFontsUsed(slide.textLayers)
            for (const fontConfig of fonts) {
                if (!loadedFonts.has(fontConfig.key)) {
                    addGoogleFontIntoHtmlHead(fontConfig)
                    loadedFonts.add(fontConfig.key)
                }
            }
        }
    }, [who])

    return (
        <Configuration.Root>
            <Configuration.Section title="Setting">
                <h2 className="text-lg font-semibold">Set Farcaster Username</h2>

                <Select
                    defaultValue={config?.who || 'yourself'}
                    onChange={(value) => {
                        const who = value as 'yourself' | 'someone'
                        updateConfig({ who })
                    }}
                >
                    <option value="yourself">Yourself</option>
                    <option value="someone">Someone else</option>
                </Select>
                {config.who === 'someone' && <Input
                    className="py-2 text-lg"
                    placeholder="username"
                    defaultValue={username}
                    onChange={(e) => setUsername(e.target.value)}
                />}


            </Configuration.Section>
        </Configuration.Root>
    )
}
