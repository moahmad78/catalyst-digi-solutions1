import { redirect } from "next/navigation";

export default function FAQRedirect() {
    redirect("/legal/faq");
    return null;
}
