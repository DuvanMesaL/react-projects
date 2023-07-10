export function Sidebar(){
    return(
        <div id="sidebar">
				
					<h1 id="logo"><a href="#">STRIPED</a></h1>
				
					<nav id="nav">
						<ul>
							<li className="current"><a href="#">Latest Post</a></li>
							<li><a href="#">Archives</a></li>
							<li><a href="#">About Me</a></li>
							<li><a href="#">Contact Me</a></li>
						</ul>
					</nav>
				
					<section className="box search">
						<form method="post" action="#">
							<input type="text" className="text" name="search" placeholder="Search" />
						</form>
					</section>
				
					<section className="box text-style1">
						<div className="inner">
							<p>
								<strong>Striped:</strong> A free and fully responsive React site
								template designed by <a href="#">ME</a> for <a href="#">FUAP</a>
							</p>
						</div>
					</section>
				
					<section className="box recent-posts">
						<header>
							<h2>Recent Posts</h2>
						</header>
						<ul>
							<li><a href="#">Lorem ipsum dolor</a></li>
							<li><a href="#">Feugiat nisl aliquam</a></li>
							<li><a href="#">Sed dolore magna</a></li>
							<li><a href="#">Malesuada commodo</a></li>
							<li><a href="#">Ipsum metus nullam</a></li>
						</ul>
					</section>
				
					<section className="box recent-comments">
						<header>
							<h2>Recent Comments</h2>
						</header>
						<ul>
							<li>case on <a href="#">Lorem ipsum dolor</a></li>
							<li>molly on <a href="#">Sed dolore magna</a></li>
							<li>case on <a href="#">Sed dolore magna</a></li>
						</ul>
					</section>
				
					<section className="box calendar">
						<div className="inner">
							<table>
								<caption>July 2014</caption>
								<thead>
									<tr>
										<th scope="col" title="Monday">M</th>
										<th scope="col" title="Tuesday">T</th>
										<th scope="col" title="Wednesday">W</th>
										<th scope="col" title="Thursday">T</th>
										<th scope="col" title="Friday">F</th>
										<th scope="col" title="Saturday">S</th>
										<th scope="col" title="Sunday">S</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colSpan="4" className="pad"><span>&nbsp;</span></td>
										<td><span>1</span></td>
										<td><span>2</span></td>
										<td><span>3</span></td>
									</tr>
									<tr>
										<td><span>4</span></td>
										<td><span>5</span></td>
										<td><a href="#">6</a></td>
										<td><span>7</span></td>
										<td><span>8</span></td>
										<td><span>9</span></td>
										<td><a href="#">10</a></td>
									</tr>
									<tr>
										<td><span>11</span></td>
										<td><span>12</span></td>
										<td><span>13</span></td>
										<td className="today"><a href="#">14</a></td>
										<td><span>15</span></td>
										<td><span>16</span></td>
										<td><span>17</span></td>
									</tr>
									<tr>
										<td><span>18</span></td>
										<td><span>19</span></td>
										<td><span>20</span></td>
										<td><span>21</span></td>
										<td><span>22</span></td>
										<td><a href="#">23</a></td>
										<td><span>24</span></td>
									</tr>
									<tr>
										<td><a href="#">25</a></td>
										<td><span>26</span></td>
										<td><span>27</span></td>
										<td><span>28</span></td>
										<td className="pad" colSpan="3"><span>&nbsp;</span></td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					<ul id="copyright">
						<li>&copy; Untitled.</li><li>Design: <a href="#">HTML5 UP</a></li>
					</ul>

			</div>
    )
}