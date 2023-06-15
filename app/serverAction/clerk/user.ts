'use server'
import { auth } from '@clerk/nextjs'

export async function getUserId() {
    const userid = auth().userId
    console.log({ userid })
    return userid
}
