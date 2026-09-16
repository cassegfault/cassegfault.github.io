import { useRouter } from 'next/router'
export default function NamedApp(){
  const router = useRouter();
  return (<div>You have launched app: {router.query.slug}</div>)
}
