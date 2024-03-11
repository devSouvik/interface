import { GetFormStats, GetForms } from "@/actions/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { ReactNode, Suspense } from "react";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { LuView } from "react-icons/lu";
import { TbArrowBounce } from "react-icons/tb";
import CreateFormButton from "@/components/creteFormButton/CreateFormButton";
import { Form } from "@prisma/client";

export default function Home() {
    return (
        <main className="">
            <Suspense fallback={<StatsCards loading={true} />}>
                <CardStatsWrapper></CardStatsWrapper>
            </Suspense>
            <Separator className="my-6" />
            <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
            <Separator className="my-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CreateFormButton />
                <Suspense
                    fallback={[1, 2, 3, 4].map((item, index) => (
                        <FormCardSkeleton key={index} />
                    ))}
                >
                    <FormCards />
                </Suspense>
            </div>
        </main>
    );
}

async function CardStatsWrapper() {
    const stats = await GetFormStats();
    return <StatsCards loading={false} data={stats} />;
}

interface StatsCardProps {
    data?: Awaited<ReturnType<typeof GetFormStats>>;
    loading: boolean;
}

function StatsCards(props: StatsCardProps) {
    const { data, loading } = props;

    return (
        <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
                title="total visits"
                icon={<LuView className="text-blue-600" />}
                helperText="all time form visits"
                value={data?.visits.toLocaleString() || ""}
                loading={loading}
                className="shadow-md shadow-blue-600"
            />

            <StatsCard
                title="total submissions"
                icon={<FaWpforms className="text-yellow-600" />}
                helperText="all time form submissions"
                value={data?.sumissions.toLocaleString() || ""}
                loading={loading}
                className="shadow-md shadow-yellow-600"
            />

            <StatsCard
                title="Submission rate card"
                icon={<HiCursorClick className="text-green-600" />}
                helperText="visits that resulted in form submissions"
                value={data?.submissionRate.toLocaleString() || ""}
                loading={loading}
                className="shadow-md shadow-green-600"
            />

            <StatsCard
                title="Bounce rate"
                icon={<TbArrowBounce className="text-red-600" />}
                helperText="visits that left without form submissions"
                value={data?.submissionRate.toLocaleString() || ""}
                loading={loading}
                className="shadow-md shadow-red-600"
            />
        </div>
    );
}

function StatsCard({
    title,
    value,
    icon,
    helperText,
    loading,
    className,
}: {
    title: string;
    value: number;
    icon: ReactNode;
    loading: boolean;
    helperText: string;
    className: string;
}) {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {loading && (
                        <Skeleton>
                            <span className="opacity-0">0</span>
                        </Skeleton>
                    )}
                    {!loading && value}
                </div>
                <p className="text-xs text-muted-foreground pt-1">
                    {helperText}
                </p>
            </CardContent>
        </Card>
    );
}

function FormCardSkeleton() {
    return (
        <Skeleton className="border-2 border-primary-/20 h-[190px] w-full" />
    );
}

async function FormCards() {
    const forms = await GetForms();
    return (
        <>
            {forms.map((form) => {
                return <FormCard key={form.id} form={form} />;
            })}
        </>
    );
}

function FormCard({ form }: { form: Form }) {
    return (
        // updates made to card on video at around 1hr, i am not doing this code,
        // this card is the forms cards on the home page
        <Card>
            <CardHeader>
                <CardTitle>
                    <span className="flex items-center gap-2 justify-between">
                        {form.name}
                    </span>
                </CardTitle>
            </CardHeader>
        </Card>
    );
}
