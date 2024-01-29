// this page ensures that a user is authenticated, 
// has completed onboarding, and provides an interface for creating a new thread using the `PostThread` component.
// If any of these conditions are not met, it gracefully handles the scenario  not rendering anything or redirecting to onboarding
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
async function Page() {
  const user = await currentUser();
  if (!user) return null;
  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <>
      <h1 className='head-text'>Create Thread</h1>

      <PostThread userId={userInfo._id} />
    </>
  );
}
export default Page;
