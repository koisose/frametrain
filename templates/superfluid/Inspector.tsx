'use client'
import { Button, Input, Select } from '@/sdk/components'
import type { FarcasterUserInfo } from '@/lib/farcaster'
import { useFrameConfig, useFarcasterId, useFarcasterName } from '@/sdk/hooks'
import { getFarcasterProfiles } from '@/sdk/neynar'
import { Configuration } from '@/sdk/inspector'
import { useState, useEffect } from 'react'
import type { Config } from '.'

export default function Inspector() {
    const [config, updateConfig] = useFrameConfig<Config>()
    const [username, setUsername] = useState("")
    const [allUser, setAllUser] = useState<FarcasterUserInfo[]>([])
    const farId = useFarcasterId()
    const farName = useFarcasterName()
    const { who } = config

    useEffect(()=>{
        if(who==="yourself"){
            getFarcasterProfiles([farId]).then(user=>setAllUser(user))
        }else{
            setAllUser([])
        }
        
    },[who])

    return (
        <Configuration.Root>
            <Configuration.Section title="Setting">
                <h2 className="text-lg font-semibold">Set Farcaster Username</h2>

                <Select
                    defaultValue={config?.who}
                    onChange={async (value) => {
                        const who = value as 'yourself' | 'someone'
                        updateConfig({ who })
                        if (who === "yourself") {
                            const profile=await getFarcasterProfiles([farId]);
                            setAllUser(profile)
                            updateConfig({ username: profile[0].username, profpic: profile[0].pfp_url })
                        }else{
                            updateConfig({ username: "", address: "",profpic:"" })
                        }
                    }}
                >
                    <option value=""></option>
                    <option value="yourself">Yourself {`(${farName})`}</option>
                    <option value="someone">Someone else</option>
                </Select>
              
                {who === 'yourself' && allUser && allUser.length > 0 && <>
                    <h2 className="text-lg font-semibold">Pick Address to Send to</h2>
                    <Select
                        defaultValue={config?.address}
                        onChange={async(value) => {
                            const profile=await getFarcasterProfiles([farId]);
                            setAllUser(profile)
                            updateConfig({ address: value, username: profile[0].username, profpic: allUser[0].pfp_url })
                        }}
                    >
                        <option value={allUser[0].custody_address}>{allUser[0].custody_address}</option>
                        <option value={allUser[0].verifications}>{allUser[0].verifications}</option>

                    </Select>
                </>}
                {who === 'someone' && <Input
                    className="py-2 text-lg"
                    placeholder="username"
                    defaultValue={username}
                    onChange={(e) => setUsername(e.target.value)}
                />}


            </Configuration.Section>
        </Configuration.Root>
    )
}
