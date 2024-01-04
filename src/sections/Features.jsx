import Card from "../components/Card"

const Features = () => {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <Card iconName="collection" title="Fresh new layout" text="With Bootstrap 5, we've created a fresh new layout for this template!" />
                    <Card iconName="cloud-download" title="Free to download" text="As always, Start Bootstrap has a powerful collectin of free templates." />
                    <Card iconName="card-heading" title="Jumbotron hero header" text="The heroic part of this template is the jumbotron hero header!" />
                    <Card iconName="bootstrap" title="Feature boxes" text="We've created some custom feature boxes using Bootstrap icons!" />
                    <Card iconName="code" title="Simple clean code" text="We keep our dependencies up to date and squash bugs as they come!" />
                    <Card iconName="patch-check" title="A name you trust" text="Start Bootstrap has been the leader in free Bootstrap templates since 2013!" />
                </div>
            </div>
        </section>
    )
}
export default Features;