


interface BlogDetailsProps {
  params: Promise<{slug: string}>;
}

export default async function BlogDetails({params} : BlogDetailsProps){

  const {slug: blogSlug} = await params;

  return (
    <div className="flex justify-center items-center h-96">
      <div>
        Blog slug is - {" "}
        <code>
          {blogSlug}
        </code>
      </div>
    </div>
    
  );
}
