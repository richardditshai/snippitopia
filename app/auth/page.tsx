'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaGithub, FaGoogle } from "react-icons/fa"
import { createBClient } from "@/utils/supabase/client";

const pymsg = `def show_message():
    print("Sign in to get started")

# Call the function to display the message
show_message()`;

export default function Page() {
  
  const handleOAuthLogin = async (provider: 'github' | 'google') => {

    const supabase = createBClient();

    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + '/auth/callback'
      }
    })

  }

  return (
    <div className="flex flex-1 justify-center items-center">
      <Card className="w-auto">
        <CardHeader>
          <SyntaxHighlighter language="python" style={atomDark} className='text-sm'>
            {pymsg}
          </SyntaxHighlighter>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button variant="outline" className="w-full">
            <div className="flex items-center gap-2">
              <FaGoogle size={20} />
              <span>Continue with Google</span>
            </div>
          </Button>
          <Button onClick={() => handleOAuthLogin('github')} variant="outline" className="w-full">
            <div className="flex items-center gap-2">
              <FaGithub size={20} />
              <span>Continue with GitHub</span>
            </div>
          </Button>
        </CardContent>
  
      </Card>
    </div>
  )
}
