export default function GithubHeatmap() {
  return (
        <a href="https://github.com/a-knaw-knee-mus" target="_blank" rel="noopener noreferrer">
            <div className="bg-white dark:bg-darkblue-light rounded-lg shadow-lg dark:shadow-blue-900 dark:shadow-lg p-4 flex gap-2 flex-col hover:scale-105 transition">
                <h2 className="font-extrabold text-sm sm:text-base md:text-lg">
                    Github Squares
                </h2>
                <img src="http://ghchart.rshah.org/24598b/a-knaw-knee-mus" alt="a-knaw-knee-mus's Github chart" />
            </div>
        </a>
    )
}