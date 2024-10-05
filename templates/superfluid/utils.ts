import type { FarcasterUserInfo } from '@/lib/farcaster'

const NEYNAR_API_URL = 'https://api.neynar.com/v2'

export async function getFarcasterProfiles(username: string): Promise<{ user: FarcasterUserInfo }> {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            api_key: process.env.NEYNAR_API_KEY!,
            'content-type': 'application/json',
        },
    }

    const r = (await fetch(`${NEYNAR_API_URL}/farcaster/user/by_username?username=${username}`, options)
        .then((response) => response.json())
        .catch((err) => {
            console.error(err)
            return {
                user: {} as FarcasterUserInfo,
            }
        })) as { user: FarcasterUserInfo }

    const { user } = r

    return { user }
}